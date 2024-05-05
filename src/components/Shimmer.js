import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import default skeleton styles

function ResCardSkeleton() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#f2f2f2">
      <div className='shimmer-container'>
        {[...Array(10)].map((_, index) => (
          <div className='res-card skeleton' key={index}>
            <Skeleton height={170} className='img-skeleton'/>
            <div className='content-skeleton'>
              <Skeleton height={30} width={200} className='title-skeleton' />
              <Skeleton height={30} width={150} className='subtitle-skeleton' />
              <Skeleton height={25} width={120} className='rating-skeleton' />
              <Skeleton height={16} width={100} className='tag-skeleton' />
              <Skeleton height={16} width={80} className='tag-skeleton' />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
}

export default ResCardSkeleton;
