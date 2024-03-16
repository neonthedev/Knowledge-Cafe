import PropTypes from 'prop-types';
// Proptypes here in line 1 is a capital letter, but later used as camel case as Blog.propTypes, taken from website
// Taking a blog as props 

// Importing icons from react icons website
import { FaBookmark } from "react-icons/fa";
const SingleBlog = ({blog, addBookmark, handleMarkAsRead }) => {
    // destructuring title from blog
    const {title, cover, author, author_image, posted_date, reading_time, hashtags} = blog; 
    return (
        <div className='mb-20 ml-4 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='ml-6'> 
                        <h3 className='3xl'>{author}
                        </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>
                        {reading_time} min read
                    </span>
                    <button onClick={ () => addBookmark(blog)} className='ml-2 text-violet-500 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map(hashtag => 
                        <span key={hashtag} className='bg-blue-500 text-white px-2 py-1 rounded-full'>
                            #{hashtag}
                        </span> )
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='mt-4 text-purple-700 font-bold underline'>Mark as read</button>

        </div>
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default SingleBlog;