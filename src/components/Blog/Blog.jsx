import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.png'
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    const { author, title, cover, posted_date, reading_time, hashtags } = blog
    return (
        <div className='space-y-4 border-[#11111126] border-b-2 mb-10 pb-5'>
            <img className='rounded-b-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={profile} alt="" className='h-[60px] rounded-full' />
                    <div>
                        <h4 className='text-[24px] font-bold'>{author}</h4>
                        <p className='text-[16px] text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p >{reading_time < 10 ? `0${reading_time} min Read` : `${reading_time} min Read`} </p>
                    <button onClick={()=>{handleBookmarks(blog)}} className='cursor-pointer text-3xl'><CiBookmark></CiBookmark ></button>
                </div>
            </div>
            <h1 className='text-[40px] font-bold'>{title}</h1>
            <ul className='flex gap-2 font-medium text-xl text-[#11111199]'>
                {
                    hashtags.map((x, idx) => <li key={idx}>{x}</li>)
                }
            </ul>
            <p onClick={()=>handleMarkAsRead(reading_time)} className='cursor-pointer border-b inline text-[#6047EC] border-[#6047EC]'>Mark As Read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;