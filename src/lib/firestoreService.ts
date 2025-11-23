import { db, admin } from './firebaseAdmin';

type AnyObject = { [k: string]: any };

export async function createDoc(collection: string, data: AnyObject) {
  const colRef = db.collection(collection);
  const docRef = colRef.doc();
  const payload = { ...data, creado_en: admin.firestore.FieldValue.serverTimestamp() };
  await docRef.set(payload);
  return { id: docRef.id, ...payload };
}

export async function getDocs(collection: string, limit = 100) {
  const colRef = db.collection(collection);
  let q = colRef.orderBy('creado_en', 'desc').limit(limit);
  const snap = await q.get();
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as AnyObject) }));
}

export async function getDocById(collection: string, id: string) {
  const doc = await db.collection(collection).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...(doc.data() as AnyObject) };
}

export async function updateDoc(collection: string, id: string, data: AnyObject) {
  const ref = db.collection(collection).doc(id);
  await ref.update({ ...data, actualizado_en: admin.firestore.FieldValue.serverTimestamp() });
  const updated = await ref.get();
  return { id: updated.id, ...(updated.data() as AnyObject) };
}

export async function deleteDoc(collection: string, id: string) {
  await db.collection(collection).doc(id).delete();
  return { id };
}
