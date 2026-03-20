export const getFileByName = (files: File[], name: string): File | null => {
  if (!files?.length) return null;

  return (
    files.find((file) => file.name.toLowerCase() === `${name}.csv`) || null
  );
};
