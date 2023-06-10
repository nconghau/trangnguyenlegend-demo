export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) {
    return bytes + 'B';
  } else if (bytes < 1048576) {
    return (bytes / 1024).toFixed(2) + 'KB';
  } else {
    return (bytes / 1048576).toFixed(2) + 'MB';
  }
}