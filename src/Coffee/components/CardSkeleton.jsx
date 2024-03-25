import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
  return (
  <div>
    <div>
      <SkeletonTheme color="#333" highlightColor="#4a4a4a">
          <Skeleton height={160} width={260} />
      </SkeletonTheme>
    </div>
    <div>
      <SkeletonTheme color="#333" highlightColor="#4a4a4a">
          <Skeleton count={2} />
      </SkeletonTheme>
    </div>
  </div>
  )
}
