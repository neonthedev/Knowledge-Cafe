import PropTypes from 'prop-types';
// Proptypes here in line 1 is a capital ByteLengthQueuingStrategy, but later used as camel case as Blog,propTypes
// Taking a blog as props 
const SingleBlog = (blog) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default SingleBlog;