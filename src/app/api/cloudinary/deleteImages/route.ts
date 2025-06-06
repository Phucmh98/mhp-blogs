
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
// Config Cloudinary bằng API Key/Secret
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export async function POST(request: Request) {
  try {
    const { publicIds } = await request.json();

    if (!Array.isArray(publicIds) || publicIds.length === 0) {
      return NextResponse.json({ error: "publicIds must be a non-empty array" }, { status: 400 });
    }

    // Xóa ảnh Cloudinary
    await Promise.all(
      publicIds.map(async (id) => {
        const result = await cloudinary.uploader.destroy(id);
        if (result.result !== "ok" && result.result !== "not found") {
          throw new Error(`Failed to delete image: ${id}`);
        }
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete image error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}