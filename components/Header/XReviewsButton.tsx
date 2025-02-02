import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { BsTwitterX } from 'react-icons/bs';

const XReviewsButton = () => {
  return (
    <Link className={buttonVariants({ variant: 'ghost' })} href="/reviews">
      <BsTwitterX />
      <span className="hidden sm:block">People</span>
    </Link>
  );
};

export default XReviewsButton;
