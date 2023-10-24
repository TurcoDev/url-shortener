import insertUrl from "@/app/db/insertShortUrl";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const data = await req.json();
    const { url } = data;
    // console.log(data);
    await insertUrl(url)

    return NextResponse.json({ url }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      // { status: 500 }
    );
  }
}
