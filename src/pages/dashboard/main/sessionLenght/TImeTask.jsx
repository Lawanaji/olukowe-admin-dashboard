import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ebook from '../../../../assets/ebook.svg'
import instagram from '../../../../assets/instagram.svg'
import blog from '../../../../assets/blog.svg'
import youtube from '../../../../assets/youtube.svg'

export const TimeTask = () => {

    const percentage = 100;
    const InstagramCaption = 2;
    const blogpercentage =  75
    const Youtubegenerator = 100
  return (
    <div>
          <span className='flex justify-between items-center'>
          <img src={ebook} alt="" />

          <div className='text-xl'>
            <p className='font-medium'>Ebook writing</p>
            <p>Complete Tasks</p>
          </div>

          <p className='font-medium'>49hrs: 30mins: 12secs</p>

          <CircularProgressbar value={percentage} text={`${percentage}%`} className='w-[50px] h-[150px]' styles={buildStyles({textColor: "black", pathColor: "#F55A8E"})} />

        </span>

        <span className='flex justify-between items-center'>
          <img src={instagram} alt="" />

          <div className='text-xl'>
            <p className='font-medium'>Instagram caption</p>
            <p>Incomplete Tasks</p>
          </div>

          <p className='font-medium'>0hrs: 04mins: 42secs</p>

          <CircularProgressbar value={InstagramCaption} text={`${InstagramCaption}%`} className='w-[50px] h-[150px]' styles={buildStyles({textColor: "black", pathColor: "#FFC952"})} />

        </span>

        <span className='flex justify-between items-center'>
          <img src={blog} alt="" />

          <div className='text-xl'>
            <p className='font-medium'>Blog post</p>
            <p>Incomplete Tasks</p>
          </div>

          <p className='font-medium'>3hrs: 15mins: 54secs</p>

          <CircularProgressbar value={blogpercentage} text={`${blogpercentage}%`} className='w-[50px] h-[150px]' styles={buildStyles({textColor: "black", pathColor: "#DEDDFF"})} />

        </span>

        <span className='flex justify-between items-center'>
          <img src={youtube} alt="" />

          <div className='text-xl'>
            <p className='font-medium'>Youtube generator</p>
            <p>Incomplete Tasks</p>
          </div>

          <p className='font-medium'>0hrs: 05mins: 06secs</p>

          <CircularProgressbar value={Youtubegenerator} text={`${Youtubegenerator}%`} className='w-[50px] h-[150px]' styles={buildStyles({textColor: "black", pathColor: "#FF0000"})} />

        </span>
    </div>
  )
}
