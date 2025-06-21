import { v } from "convex/values";
import { mutation, query } from "../_generated/server"



export const getAllProjects = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("projectManage").collect();
    },
})
export const getProjectById = query({
    args: { id: v.string() },
    handler: async (ctx, args) => {
        const projects = await ctx.db.query("projectManage").filter(q => q.eq(q.field("id"), args.id)).collect();
        return projects.length > 0 ? projects[0] : null;
    }
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

export const updateProject = mutation({
    args: {
        id: v.string(),
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        content: v.optional(v.string()),
        image: v.optional(v.string()),
        urlGithub: v.optional(v.string()),
        urlDemo: v.optional(v.string()),
        type: v.optional(v.string()),
        status: v.optional(v.string()),
        backgroundColor: v.optional(v.string()),
        startDate: v.optional(v.string()),
        contentDetail: v.optional(v.string()),
        role: v.optional(v.string()),
        client: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Tìm document theo field "id" (giá trị id trong value)
        const project = await ctx.db
            .query("projectManage")
            .filter(q => q.eq(q.field("id"), args.id))
            .first();
        if (!project) return;
        const { id, ...updateFields } = args;
        await ctx.db.patch(project._id, updateFields);
    }
})
