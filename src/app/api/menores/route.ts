import { NextResponse } from 'next/server';
import { createDoc, getDocs, getDocById } from '@/lib/firestoreService';

const COLLECTION = 'menores';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (id) {
      const doc = await getDocById(COLLECTION, id);
      if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(doc);
    }
    const docs = await getDocs(COLLECTION);
    return NextResponse.json(docs);
  } catch (err) {
    return NextResponse.json({ error: 'Server error', details: String(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const created = await createDoc(COLLECTION, body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error', details: String(err) }, { status: 500 });
  }
}
