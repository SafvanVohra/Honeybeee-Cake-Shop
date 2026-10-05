"use server"

import { prisma } from "@/lib/prisma"
import menuData from "@/data/menu.json"

export async function getMenuItems(category?: string) {
  try {
    if (prisma && prisma.menuItem) {
      const items = await prisma.menuItem.findMany({
        where: category && category !== "All" ? { category } : undefined,
        orderBy: { createdAt: 'asc' }
      });
      if (items && items.length > 0) {
        return { success: true, data: items };
      }
    }
  } catch (error) {
    console.warn("Database not initialized, serving from static demo menu:", error);
  }
  
  // Safe instant fallback for demo deployment
  const filtered = category && category !== "All"
    ? menuData.filter(i => i.category === category)
    : menuData;
    
  return { success: true, data: filtered };
}

export async function getAllCategories() {
  try {
    if (prisma && prisma.menuItem) {
      const items = await prisma.menuItem.findMany({
        select: { category: true },
        distinct: ['category']
      });
      if (items && items.length > 0) {
        const categories = items.map(i => i.category);
        return { success: true, data: categories };
      }
    }
  } catch (error) {
    console.warn("Database not initialized, serving static categories:", error);
  }
  
  // Safe instant fallback for demo deployment
  const categories = Array.from(new Set(menuData.map(i => i.category)));
  return { success: true, data: categories };
}
