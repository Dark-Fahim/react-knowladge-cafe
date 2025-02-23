import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.png'

const Blog = ({ blog }) => {
    console.log(blog)
    const { author, author_img, title, cover, posted_date, reading_time, hashtags } = blog
    return (
        <div className='space-y-4 border-[#11111126] border-b-2 my-5 py-5'>
            <img className='rounded-b-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={profile} alt="" className='h-[60px] rounded-full' />
                    <div>
                        <h4 className='text-[24px] font-bold'>{author}</h4>
                        <p className='text-[16px] text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time < 10 ? `0${reading_time} min Read` : `${reading_time} min Read`} <span></span> </p>
                </div>
            </div>
            <h1 className='text-[40px] font-bold'>{title}</h1>
            <ul className='flex gap-2 font-medium text-xl text-[#11111199]'>
                {
                    hashtags.map((x, idx) => <li key={idx}>{x}</li>)
                }
            </ul>
            <p className='cursor-pointer border-b inline text-[#6047EC] border-[#6047EC]'>Mark As Read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;