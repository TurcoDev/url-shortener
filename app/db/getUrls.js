import ShortUrl from "@/app/models/shortUrl.model";
import connectDB from './dbConnect'

export default async function getUrls() {

  try {
    await connectDB();
    return await ShortUrl.find({})
    
    
  } catch (error) {
    console.log({message: "Error al guardar en la db", error});
  }
}