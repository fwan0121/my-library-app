import axios from "axios";

export type Book = {
    id: string;
    title: string;
    author: string;
    rating: number;
    description: string;
};

export const fetchBooks = async (): Promise<Book[]> => {
    try {
        const response = await axios.get('http://localhost:3001/books');
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

