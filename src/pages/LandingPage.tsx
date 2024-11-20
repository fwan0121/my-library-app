import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import BookCard from '../components/BookCard';
import { fetchBooks, Book } from '../api/books';

function LandingPage() {
    const [books, setBooks] = useState<Book[]>([]);
    
    useEffect(() => {
        const loadBooks = async () => {
          try {
            const data = await fetchBooks();
            setBooks(data);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
    
        loadBooks();
    }, []);
    
    const newArrivals = books.slice(0, 3);
    const bestSellers = books.slice(0, 3);

    return (
        <>
            <Header />
            <SearchBar />
            <div className="max-w-6xl mx-auto p-8">
                <SectionTitle title="New Arrivals" />
                <BookCard books={newArrivals} />
                <SectionTitle title="Best Sellers" />
                <BookCard books={bestSellers}/>
            </div>
        </>
    )
}

export default LandingPage;