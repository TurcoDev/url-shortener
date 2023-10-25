// `app/page.js` is the UI for the `/` URL
import getShortUrls from "@/app/db/getShortUrls";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {

    const data = await req.json();
    const { url } = data;
    console.log(await insertUrl(url));

    // const urlInserted = await insertUrl(url)
    // console.log(urlInserted);

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
