import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  memeCommunity: defineTable({
    comfirmAt: v.string(),
    createdAt: v.string(),
    email: v.string(),
    url: v.string(),
    name: v.string(),
  }),
});