export const deleteImages = async (publicIds: string[]) => {
  const res = await fetch("/api/cloudinary/deleteImages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ publicIds }),
  });

  if (!res.ok) {
    throw new Error("Failed to delete images");
  }

  return res.json();
};
