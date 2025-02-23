import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Boookmarks = ({bookmarks, readingTime}) => {
    
    
    return (
        <div className="space-y-5">
            <div className='bg-[#1111110D] p-5 rounded-xl'>
                <h2 className='text-[#6047EC] font-bold text-[24px]'>Spent Time On Read: {readingTime} min</h2>
            </div>
            <div className="bg-[#1111110D] p-5 rounded-xl">
                <h2 className='text-[24px] font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
                <div>
                    {
                        bookmarks.map((blog, idx) => <Bookmark 
                            key={idx}
                            blog={blog}
                            ></Bookmark>)
                    }
                </div>
            </div>
            
        </div>
    );
};

Boookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired,
    
}

export default Boookmarks;