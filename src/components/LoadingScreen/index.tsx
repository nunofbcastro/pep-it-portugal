import Loading from '../Loading';

export interface LoadingScreenProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}

export function LoadingScreen(props: LoadingScreenProps) {
  return (
    <>
      {props.isLoading && (
        <div className="grid place-items-center h-full">
          <Loading />
        </div>
      )}

      {!props.isLoading && !props.isError && props.children}

      {!props.isLoading && props.isError && (
        <div className="grid place-items-center h-full text-red-700 text-lg">
          Error requesting
        </div>
      )}
    </>
  );
}
