import PropTypes from 'prop-types';

const SingleBookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

SingleBookmark.propTypes= {
    bookmark: PropTypes.object.isRequired
}
export default SingleBookmark;