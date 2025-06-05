import { query } from "../_generated/server"
import { v } from "convex/values";

export const getAllMemes = query({
    args: {},
    handler: async (ctx) => {
        // Lấy tất cả bản ghi trong memeCommunity
        const memes = await ctx.db.query("memeCommunity").order("desc").collect();
        return memes;
    },
})