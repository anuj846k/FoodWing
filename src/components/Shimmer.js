import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

function ResCardSkeleton() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#f2f2f2">
      <div className='shimmer-container flex flex-wrap justify-center gap-5 mt-20 p-5'>
        {[...Array(10)].map((_, index) => (
          <div className='res-card skeleton w-[270px] h-[400px] p-4 shadow-md rounded-lg bg-white transition transform ease-in-out hover:shadow-lg hover:scale-105' key={index}>
            <Skeleton height={170} className='img-skeleton rounded-t-lg' />
            <div className='p-4'>
              <Skeleton height={30} width={200} className='title-skeleton mb-2' />
              <Skeleton height={30} width={150} className='subtitle-skeleton mb-2' />
              <div className='items-center mb-2'>
                <Skeleton height={16} width={80} className='tag-skeleton' />
              </div>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <Skeleton height={16} width={60} className='tag-skeleton' />
                <Skeleton height={16} width={50} className='tag-skeleton' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
}

export default ResCardSkeleton;
