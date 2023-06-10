import { axiosClient } from './axiosClient';

const Api = {
  getFileUpload(): Promise<any> {
    return axiosClient.get('files?user=userId1');
  },
  getConvertText(): Promise<any> {
    return axiosClient.get('converts?user=userId1');
  },
  getChatGPTResponse(): Promise<any> {
    return axiosClient.get('getChatGPTResponse?user=userId1');
  },
  uploadFile(payload: any): Promise<any> {
    return axiosClient.post("/files/upload", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default Api;
