import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col gap-5 pl-7 col-span-1 z-10">
      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex gap-6">
         
            <img alt="home" src="hut.png" className="w-5 h-5" />
            <Link to="/">   Home
          </Link>
        </li>
        <li className="flex gap-6">
          <img alt="home" src="shorts.svg" className="w-5 h-5" />
          Shorts
        </li>
        <li className="flex gap-6">
          <img
            alt="subscriptions"
            className="w-5 h-5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC"
          />
          Subscriptions
        </li>
      </ul>

      <div className="w-56 h-0.5 bg-slate-200 "></div>

      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex align-middle gap-6">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzi5z4Eg6fOBF041mO_YXN8wSJ2K7WzeLCBugagIiJWeudVADlZwIoOgwK20gvg5WOLI&usqp=CAU"
            className="w-5 h-5"
          />
          Library
        </li>
        <li className="flex align-middle gap-6">
          <img
            alt="home"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/history-2036561-1740215.png"
            className="w-5 h-5"
          />
          History
        </li>
        <li className="flex align-middle gap-6">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Cv3kluzzwRdkTKs6dfGx5pakHA2Y020qGg&usqp=CAU"
            className="w-5 h-5"
          />
          Your Videos
        </li>
        <li className="flex align-middle gap-6">
          <img alt="home" src="watch.jpg" className="w-5 h-5" />
          Watch Later
        </li>
        <li className="flex align-middle gap-6">
          <img
            alt="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ASsR4gjmcNMWpJfj41_jfQ_r48zN4eWzrtOfanQCVod6OO1_qLRfQczJ-FEwwKo4s7U&usqp=CAU"
            className="w-5 h-5"
          />
          Liked Videos
        </li>
      </ul>

      <div className="w-56 h-0.5 bg-slate-200"></div>
      <div>
        <h3 className="text-lg font-medium text-black pb-3">Explore</h3>
        <ul className="flex flex-col gap-3 text-slate-700">
          <li className="flex gap-6">
            <img
              alt="home"
              src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg"
              className="w-5 h-5"
            />
            Trending
          </li>
          <li className="flex gap-6">
            <img alt="home" src="bag.png" className="w-5 h-5" />
            Shopping
          </li>
          <li className="flex gap-6">
            <img
              alt="home"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWszyralqwgbOGntFnauK72qEBy-o5adoiJw&usqp=CAU"
              className="w-5 h-5"
            />
            Music
          </li>
          <li className="flex gap-6">
            <img alt="home" src="film.png" className="w-6 h-5" />
            Films
          </li>
          <li className="flex gap-6">
            <img alt="home" src="live.png" className="w-6 h-5" />
            Live
          </li>
          <li className="flex gap-6">
            <img alt="home" src="game.png" className="w-5 h-5" />
            Gaming
          </li>
          <li className="flex gap-6">
            <img
              alt="home"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9RX5iWc_MoK-RXezXU_ZKXpTNSDg5n_igg&usqp=CAU"
              className="w-5 h-5"
            />
            News
          </li>
          <li className="flex gap-6">
            <img
              alt="home"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZpUUphmOLPyc1kIHbBApEoc02-KCwTpX-i0kY2hGUGJz9oD62cwC1vfcvQ3H_aepSos&usqp=CAU"
              className="w-5 h-5"
            />
            Sport
          </li>
          <li className="flex gap-6">
            <img alt="home" src="bulb.png" className="w-5 h-5" />
            Learning
          </li>
          <li className="flex gap-6">
            <img alt="home" src="fashion.png" className="w-5 h-5" />
            Fashion & beauty
          </li>
        </ul>
      </div>

      <div className="w-56 h-0.5 bg-slate-200"></div>

      <div>
        <h3 className="text-lg font-medium pb-3 text-black">
          More from YouTube
        </h3>
        <ul className="flex flex-col gap-3 text-slate-700">
          <li className="flex gap-6">
            <img alt="home" src="yt.png" className="w-5 h-5" />
            YouTube Premium
          </li>
          <li className="flex gap-6">
            <img alt="home" src="ythex.png" className="w-5 h-5" />
            YouTube Studio
          </li>
          <li className="flex gap-6">
            <img alt="home" src="ytround.png" className="w-5 h-5" />
            YouTube Music
          </li>
          <li className="flex gap-6">
            <img alt="home" src="ytkids.png" className="w-5 h-5" />
            YouTube Kids
          </li>
        </ul>
      </div>

      <div className="w-56 h-0.5 bg-slate-200"></div>

      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex gap-6">
          <img alt="home" src="settings.png" className="w-5 h-5" />
          Settings
        </li>
        <li className="flex gap-6">
          <img alt="home" src="flag.png" className="w-5 h-5" />
          Report history
        </li>
        <li className="flex gap-6">
          <img alt="home" src="help.png" className="w-5 h-5" />
          Help
        </li>
        <li className="flex gap-6">
          <img alt="home" src="send.png" className="w-5 h-5" />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
