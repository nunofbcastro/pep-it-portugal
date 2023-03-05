import Loading from '../Loading';

export interface LoadingScreenProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}

export function LoadingScreen({
  isLoading,
  isError,
  children,
}: LoadingScreenProps) {
  return (
    <>
      {isLoading && (
        <div className="grid place-items-center h-full">
          <Loading />
        </div>
      )}

      {!isLoading && !isError && children}

      {!isLoading && isError && (
        <div className="grid place-items-center h-full text-red-700 text-lg">
          Error requesting
        </div>
      )}
    </>
  );
}
