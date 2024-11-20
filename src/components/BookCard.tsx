import { Book } from '../api/books';

interface BookCardProps {
    books: Book[];
}
  
function BookCard({ books }: BookCardProps) {
 
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {books.map((book) => (
            <div key={book.id} className="p-4 border rounded bg-white shadow">
              <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
                Book Cover
              </div>
              <span className="px-2 py-1 text-xs font-semibold text-white bg-black rounded">
                {book.rating} ★
              </span>
              <h4 className="text-lg font-bold mt-2">{book.title}</h4>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
            </div>
          ))}
        </div>
      );
    
}

export default BookCard;
