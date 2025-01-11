

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-col-1 md:grid-cols-4 md:grid-rows-6 gap-4 py-14">
                <div className="p-20 bg-red-500 col-span-2 row-span-2">This is 01</div>
                <div className="p-20 bg-red-700 col-span-2">This is 02</div>
                <div className="p-20 bg-red-950 col-span-2 row-span-2">This is 03</div>
                <div className="p-20 bg-slate-500 ">This is 04</div>
                <div className="p-20 bg-slate-700 ">This is 05</div>
                <div className="p-20 bg-slate-900 col-span-2 row-span-2">This is 06</div>
                <div className="p-20 bg-blue-500 row-span-2">This is 07</div>
                <div className="p-20 bg-blue-800 row-span-2">This is 08</div>
                {/* <div className="p-20 bg-blue-950">This is 09</div> */}
                {/* <div className="p-20 bg-green-500">This is 10</div> */}
                {/* <div className="p-20 bg-green-800">This is 11</div>
                    <div className="p-20 bg-green-950">This is 12</div> */}
                {/* <div className="p-10 bg-yellow-500 ">This is 13</div>
                <div className="p-10 bg-yellow-700 ">This is 14</div>
                <div className="p-10 bg-yellow-900 ">This is 15</div>
                <div className="p-10 bg-pink-500 ">This is 16</div>
                <div className="p-10 bg-pink-700 ">This is 17</div>
                <div className="p-10 bg-pink-900 ">This is 18</div>
                <div className="p-10 bg-gray-500 ">This is 19</div>
                <div className="p-10 bg-gray-700 ">This is 20</div> */}
            </div>
            <br />
            <br />
            <div className="grid grid-cols-4 grid-rows-4 gap-4 py-14">
                <div className="p-20 bg-red-500 col-span-2 row-span-2">This is 01</div>
                <div className="p-20 bg-red-700 row-span-2">This is 02</div>
                <div className="p-20 bg-red-950 row-span-2">This is 03</div>
                <div className="p-20 bg-slate-500 row-span-2">This is 04</div>
                <div className="p-20 bg-slate-700 row-span-2">This is 05</div>
                <div className="p-20 bg-slate-900 col-span-2">This is 06</div>
                <div className="p-20 bg-blue-500 col-span-2">This is 07</div>
                {/* <div className="p-20 bg-blue-800 ">This is 08</div> */}
                {/* <div className="p-20 bg-blue-950">This is 09</div> */}
                {/* <div className="p-20 bg-green-500">This is 10</div> */}
                {/* <div className="p-20 bg-green-800">This is 11</div>
                    <div className="p-20 bg-green-950">This is 12</div> */}
            </div>
            <br />
            <br />
            <div className="grid grid-rows-4 grid-flow-col gap-4 py-14">
                <div className="p-20 bg-red-500 col-span-2 row-span-2">This is 01</div>
                <div className="p-20 bg-red-700 row-span-2">This is 02</div>
                <div className="p-20 bg-red-950 row-span-2">This is 03</div>
                <div className="p-20 bg-slate-500 row-span-2">This is 04</div>
                <div className="p-20 bg-slate-700 col-span-2 row-span-2">This is 05</div>
                <div className="p-20 bg-slate-900 row-span-2">This is 06</div>
                {/* <div className="p-20 bg-blue-500 ">This is 07</div> */}
                {/* <div className="p-20 bg-blue-800 ">This is 08</div>
                <div className="p-20 bg-blue-950">This is 09</div>
                <div className="p-20 bg-green-500">This is 10</div>
                <div className="p-20 bg-green-800">This is 11</div>
                <div className="p-20 bg-green-950">This is 12</div> */}
            </div>
        </div>
    )
};

export default Gallery;
