export function isPDF(file: any) {
  if (!file || !file?.mimetype) return false;
  return file.mimetype === 'application/pdf';
}

export function isImage(file: any) {
  if (!file || !file?.mimetype) return false;
  return file.mimetype.startsWith('image/');
}