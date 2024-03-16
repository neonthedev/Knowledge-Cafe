import PropTypes from 'prop-types'
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-8 mt-10 pt-4">
            <div>
                <h2 className='text-4xl'>Reading Time: {readingTime} </h2>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => 
                    <SingleBookmark
                    key={bookmark.id} 
                    bookmark={bookmark}
                    ></SingleBookmark>
                )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks