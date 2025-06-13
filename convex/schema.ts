import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  memeCommunity: defineTable({
    comfirmAt: v.string(),
    createdAt: v.string(),
    email: v.string(),
    idImg: v.string(),
    name: v.string(),
    nameImg: v.string(),
    thumbnail_url: v.string(),
    type: v.string(),
    url: v.string(),

  }),

  queueMeme: defineTable({
    createdAt: v.string(),
    email: v.string(),
    idImg: v.string(),
    name: v.string(),
    nameImg: v.string(),
    thumbnail_url: v.string(),
    type: v.string(),
    url: v.string(),
  }),

  projectManage: defineTable({
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
    
  })
});