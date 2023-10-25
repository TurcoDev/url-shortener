import insertUrl from "@/app/db/insertShortUrl";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const data = await req.json();
    const { url } = data;
    // const urlInserted = await insertUrl(url)
    const { short } = await insertUrl(url)
    // console.log(urlInserted);

    return NextResponse.json(short, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      // { status: 500 }
    );
  }
}
