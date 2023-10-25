
import connectDB from '../db/dbConnect'
import ShortUrl from '../models/shortUrl.model'
import { redirect } from 'next/navigation'


export default async function Page({ params }) {

  await connectDB();
  // const { shortId } = params;
  const data = await ShortUrl.findOne({})
    .where('short').equals(params.shortId);

  if (!data) {
    // console.log("raiz");
    redirect('/')
  }

  redirect(data.url)
}