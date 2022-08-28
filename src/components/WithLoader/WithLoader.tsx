import "./WithLoader.scss";
import Loader from "@components/Loader";

import { LoaderProps } from "../Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <>
      <Loader loading={loading} />
      {children}
    </>
  );
};

export default WithLoader;
