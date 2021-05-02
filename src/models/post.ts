import mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
    title: string;
    coverImgUrl: string;
    content: string;
    createdAt: Date;
    slug: string;
}

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    coverImgUrl: String,
    createdAt: {
        type: Date,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});
export default mongoose.model<IPost>('Post', postSchema);
