import  PropTypes  from 'react';

const Bookmark = ({blog}) => {
    const {title} = blog
    return (
        <div className='bg-white rounded-xl  p-3 mt-4'>
            <h2 className='text-[10px] font-semibold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    blog: PropTypes.object
};

export default Bookmark;