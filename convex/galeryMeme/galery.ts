import { mutation, query } from "../_generated/server"
import { v } from "convex/values";

export type MemeGallery = {
    idImg: string,
    createdAt: string,
    comfirmAt: string,
    email: string,
    url: string,
    name: string,
    type: string,
    nameImg: string
    thumbnail_url: string,
}

export const getAllMemes = query({
    args: {},
    handler: async (ctx) => {
        // Lấy tất cả bản ghi trong memeCommunity
        const memes = await ctx.db.query("memeCommunity").collect();
        return memes;
    },
})

export const getAllQueueMemes = query({
    args: {},
    handler: async (ctx) => {
        // Lấy tất cả bản ghi trong memeCommunity
        const memes = await ctx.db.query("queueMeme").order("desc").collect();
        return memes;
    },
})

export const confirmMemes = mutation({
    args: {
        arrMeme: v.array(
            v.object({
                idImg: v.string(),
                createdAt: v.string(),
                comfirmAt: v.string(),
                email: v.string(),
                url: v.string(),
                name: v.string(),
                type: v.string(),
                nameImg: v.string(),
                thumbnail_url: v.string(),
            })
        )
    },
    handler: async (ctx, args: { arrMeme: MemeGallery[] }) => {
        await Promise.all(
            args.arrMeme.map(async meme => {
                await ctx.db.insert("memeCommunity", {
                    idImg: meme.idImg,
                    createdAt: meme.createdAt,
                    email: meme.email,
                    url: meme.url,
                    name: meme.name,
                    type: meme.type,
                    comfirmAt: meme.comfirmAt,
                    nameImg: meme.nameImg,
                    thumbnail_url: meme.thumbnail_url,
                });

                // Xóa meme khỏi queueMeme
                const queueMemes = await ctx.db
                    .query("queueMeme").filter(q => q.eq(q.field("idImg"), meme.idImg))
                    .collect();
                for (const queueMeme of queueMemes) {
                    await ctx.db.delete(queueMeme._id);
                }
            })
        );
    }
});

export const removeMemes = mutation({
    args: {
        idImgs: v.array(v.string())
    },
    handler: async (ctx, args: { idImgs: string[] }) => {
        for (const idImg of args.idImgs) {
            const memes = await ctx.db
                .query("queueMeme")
                .filter((q) => q.eq(q.field("idImg"), idImg))
                .collect();

            for (const meme of memes) {
                await ctx.db.delete(meme._id);
            }
        }
    },
});

export const uploadMeme = mutation({
    args: {
        idImg: v.string(),
        createdAt: v.string(),
        email: v.string(),
        url: v.string(),
        name: v.string(),
        type: v.string(),
        nameImg: v.string(),
        thumbnail_url: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("queueMeme", args);
    },
})

