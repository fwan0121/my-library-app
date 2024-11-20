import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  rating: number;
};

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
    </div>
  );
}

export default BookDetail;
