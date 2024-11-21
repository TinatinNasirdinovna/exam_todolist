import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: builder => ({
        postFile: builder.mutation<FILE.UploadResponse, FILE.UploadFileRequest>({
            query: (data) => ({
                url: "/upload/file",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["file"]
        })
    })
})

export const {usePostFileMutation} = api