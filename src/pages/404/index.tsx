import { useTitle } from '../../utils/PageTitle';

import { Link } from 'react-router-dom';

export default function NotFound() {
  useTitle('404');
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <main className="h-screen w-full flex flex-col justify-center items-center theme">
        <h1 className="text-9xl font-extrabold  tracking-widest">404</h1>
        <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
          Página não encontrada
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-primary group active:text-primaryvariant focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <Link to="/">
              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                Ir para a Home
              </span>
            </Link>
          </a>
        </button>
      </main>
    </div>
  );
}
