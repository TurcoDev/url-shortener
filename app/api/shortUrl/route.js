import { NextResponse } from "next/server";
import { connect } from 'mongoose';
require('../../db/dbConnection');
import ShortUrl from "@/app/models/shortUrl.model";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const { url } = data;
    const shortUrl = Math.random().toString(36).substring(2, 8);

    const newUrlObj = {
      url: url,
      short: shortUrl,
      date: new Date()
    }

    console.log(newUrlObj);
    const newUrlModel = new ShortUrl(newUrlObj);
    newUrlModel.save();
    //res.json({ mensaje: "URL cargada correctamente" });

    return NextResponse.json({ newUrlObj }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get short URL" },
      { status: 500 }
    );
  }
}