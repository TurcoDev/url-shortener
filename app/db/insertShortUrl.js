import ShortUrl from "@/app/models/shortUrl.model";
import connectDB from './dbConnect'

export default async function insertUrl(url) {

  try {
    await connectDB();
    const shortUrl = Math.random().toString(36).substring(2, 8);
  
    const newUrlObj = {
      url: url,
      short: shortUrl,
      date: new Date()
    }
  
    const newUrlModel = new ShortUrl(newUrlObj);
    return await newUrlModel.save()
    
    
  } catch (error) {
    console.log({message: "Error al guardar en la db", error});
  }
}

