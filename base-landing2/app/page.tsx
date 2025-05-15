import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GlobalConst from "./var-global";
import { RiStarFill } from 'react-icons/ri';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <div className='mx-auto lg:w-2/3'>
            <div className=" container mx-auto flex flex-wrap md:p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <Image alt={GlobalConst.brandName} src='/logo.png' className='w-48 sm:w-52 block' width='230' height='80' />
              </a>
                <div className="max-sm:mt-8 max-sm:container md:ml-auto md:mr-auto flex items-center text-base justify-center gap-2">
                  <Link title={GlobalConst.title} href={GlobalConst.login} target="_blank" className='text-center w-52 max-sm:w-9/12 font-bold text-black px-6 py-2 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                      LOGIN
                  </Link>
                  <Link title={GlobalConst.title} href={GlobalConst.daftar} target="_blank" className='text-center w-52 max-sm:w-9/12 font-bold text-black px-6 py-2 border-2 border-[#FFFE00] rounded-sm bg-gradient-to-r from-[#FFA200] via-[#FFC300] to-[#ffa200]'>
                      DAFTAR
                  </Link>
                </div>
            </div>

          <Image alt={GlobalConst.title} src='/banner.png' className='max-sm:mt-8 w-full block' width={757} height={411} />
          <h1 className='my-6 text-center'>{GlobalConst.title}</h1>
          <div className='p-6 space-y-6 rounded-md glow-yellow mb-40'>
            <div className='flex flex-col'>
              <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full text-sm font-light border border-[#EACD00] text-surface'>
                      <thead className='font-medium border-b border-[#EACD00] bg-gradient-to-r from-[#2E2E2E] via-[#606060] to-[#2E2E2E] '>
                        <tr>
                          <th colSpan={2} scope='col' className='px-6 py-3 text-center border-2 border-e border-[#EACD00] '>
                            <h2>Informasi Ongtoto Agen Slot Maxwin Online</h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b border-[#EACD00] grid-cols-4'>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Nama Situs</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>{GlobalConst.brandName}</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>{GlobalConst.artikel1}</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>{GlobalConst.artikel2}</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Minimal Deposit</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <Image src='/icon-redcircle.svg' className='size-4 aspect-square' width='16' height='16' alt='Red Circle' />
                              IDR 10.000
                            </div>
                          </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Metode Deposit	</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>Transfer Bank, E-Wallet, QRIS Payment</td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Daftar Slot Maxwin</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <Link href={GlobalConst.daftar} target="_blank">
                              Klik disini
                            </Link>
                          </td>
                        </tr>
                        <tr className='border-b border-[#EACD00] '>
                          <td className='px-2 py-3 w-1/4 whitespace-nowrap border-e border-[#EACD00] '>Penilaian</td>
                          <td className='px-2 py-3 w-3/4 whitespace-nowrap border-e border-[#EACD00] '>
                            <div className='flex items-center gap-2'>
                              <div className='flex items-center gap-1'>
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                                <RiStarFill color='#FFC300' />
                              </div>
                              {GlobalConst.artikel3}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h2>{GlobalConst.artikel4}</h2>
            
            <p dangerouslySetInnerHTML={{ __html: GlobalConst.artikel5}} />
            
          </div>
          <div className='bg-[#5B5B5B] text-center py-4'>
            <p className='text-sm text-white font-medium'>Copyright &copy; 2025 - {GlobalConst.title} </p>
          </div>
        </div>
      </div>
    </main>
  );
}
