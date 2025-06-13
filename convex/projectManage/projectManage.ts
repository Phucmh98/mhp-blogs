import { v } from "convex/values";
import { mutation, query } from "../_generated/server"



export const getAllProjects = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("projectManage").collect();
    },
})

export const addNewProject = mutation({
    args: {
        id: v.string(),
        name: v.string(),
        description: v.string(),
        content: v.string(),
        image: v.string(),
        urlGithub: v.string(),
        urlDemo: v.string(),
        type: v.string(),
        status: v.string(),
        backgroundColor: v.string(),
        startDate: v.string(),
        contentDetail: v.string(),
        role: v.string(),
        client: v.string(),

    },
    handler: async (ctx, args) => {
        await ctx.db.insert("projectManage", args);
    }
})

export const removeProjects = mutation({
    args: {
        arr_Id: v.array(v.string())
    },
    handler: async (ctx, args) => {
        for (const _id of args.arr_Id) {
            const docId = ctx.db.normalizeId("projectManage", _id);
            if (docId) {
                await ctx.db.delete(docId);
            }
        }
    }
})
