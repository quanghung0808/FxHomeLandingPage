export const metadata = {
  title: "Dashboard",
  description: "Page description",
};

import React from "react";
import Link from "next/link";
import pic1 from "../../../public/transactions/1.png";
import pic2 from "../../../public/transactions/2.png";
import pic3 from "../../../public/transactions/3.png";
import pic4 from "../../../public/transactions/4.png";
import pic5 from "../../../public/transactions/5.png";
import pic6 from "../../../public/transactions/6.png";
import pic7 from "../../../public/transactions/7.jpg";

import Image from "next/image";

export default function Dashboard() {
  return (
    <section className="relative">
      <div className="max-w-full  mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="pb-4">
              <div className="mb-8">
                <h2 className="text-3xl font-semibold leading-tight text-red-600 mb-2">
                  Thống kê
                </h2>
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold leading-tight text-gray-500">
                    Tổng số đơn hàng: 12
                  </h2>
                  <h2 className="text-xl font-semibold leading-tight text-gray-500">
                    Đơn hàng hoàn thành: 11
                  </h2>
                  <h2 className="text-xl font-semibold leading-tight text-gray-500">
                    Tổng doanh thu: 2.150.000 VNĐ
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-red-600">
                  Lịch sử thanh toán
                </h2>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Khách hàng
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Thợ sửa chữa
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Mã đơn hàng
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Thanh toán
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Ngày thanh toán
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Phương thức thanh toán
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Hình ảnh
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Trạng thái đơn hàng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Chí Thanh
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000003
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-worker-repairman-auto-worker-laborer-labor-day-wrench-repair-vector-png-image_2612477.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Văn Tâm
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000009
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00001</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            200,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            15 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-amber-200  rounded-full"
                            ></span>
                            <span className="relative">Tiền mặt</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Thúy Vy
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000004
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/element_origin_min_pic/17/08/17/7d88c32e032382d75fe0299f616093b7.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Đinh Văn Cừ
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000011
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00002</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            150,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            17 - 7 - 2023
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic1}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Phan Thanh Ngân
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000006
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-worker-repairman-auto-worker-laborer-labor-day-wrench-repair-vector-png-image_2612477.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Văn Tâm
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000009
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00003</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            150,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            18 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic5}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Hữu Thành
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000001
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://shareviet.net/wp-content/uploads/2022/06/vector-chibi-tho-sua-chua.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Dương Lộc
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000010
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00004</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            250,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            19 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-amber-200  rounded-full"
                            ></span>
                            <span className="relative">Tiền mặt</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Hữu Thành
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000001
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap py-1">
                                -
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00005</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            -
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            -
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hủy</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Đào Minh Hiếu
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000002
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-worker-repairman-auto-worker-laborer-labor-day-wrench-repair-vector-png-image_2612477.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Văn Tâm
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000009
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00006</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            150,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            22 - 7 - 2023
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic2}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Lê Thị Ái Vân
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000005
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://shareviet.net/wp-content/uploads/2022/06/vector-chibi-tho-sua-chua.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Dương Lộc
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000010
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00007</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            200,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            22 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic3}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Ngọc Trúc Mai
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000006
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src="https://png.pngtree.com/element_origin_min_pic/17/08/17/7d88c32e032382d75fe0299f616093b7.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  Đinh Văn Cừ
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  ID: 000011
                                </p>
                              </div>
                            </div>
                          </td>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00008</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            200,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            22 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic4}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Nguyễn Quốc Thắng
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000006
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-worker-repairman-auto-worker-laborer-labor-day-wrench-repair-vector-png-image_2612477.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Văn Tâm
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000009
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00009</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            150,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            23 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic6}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trịnh Gia Bảo
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000013
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/element_origin_min_pic/17/08/17/7d88c32e032382d75fe0299f616093b7.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Đinh Văn Cừ
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000011
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00010</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            250,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            25 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-amber-200  rounded-full"
                            ></span>
                            <span className="relative">Tiền mặt</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cdn4.vectorstock.com/i/1000x1000/60/48/male-default-placeholder-avatar-profile-gray-vector-31826048.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Quốc Công
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000012
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://shareviet.net/wp-content/uploads/2022/06/vector-chibi-tho-sua-chua.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Dương Lộc
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000010
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00011</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            150,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            26 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-amber-200  rounded-full"
                            ></span>
                            <span className="relative">Tiền mặt</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          -
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=612x612&w=0&k=20&c=GL-wQYLh_UlsqeFvkgCwQXWFDFTtz0ApA1e7WPZdfYY="
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Thị Xuân Huỳnh
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000006
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-worker-repairman-auto-worker-laborer-labor-day-wrench-repair-vector-png-image_2612477.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Trần Văn Tâm
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                ID: 000009
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block py-1 font-medium text-gray-800 leading-tight">
                            <span className="relative">FX00012</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            300,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            VNĐ
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap py-1">
                            30 - 7 - 2023
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-medium text-gray-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-fuchsia-600   rounded-full"
                            ></span>
                            <span className="relative text-white">MOMO</span>
                          </span>
                        </td>
                        <td className="border-b border-gray-200 bg-white text-sm">
                          <div className="flex-shrink-0 h-80">
                            <Image
                              className="w-full h-full "
                              src={pic7}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Hoàn thành</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
