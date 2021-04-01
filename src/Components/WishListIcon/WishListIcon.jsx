import { useWishList } from "../../hooks";

export const WishListIcon = () => {
  const { totalItemsInWishList } = useWishList();

  return (
    <div>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 512 640"
          enableBackground="new 0 0 512 512"
        >
          <g>
            <path d="M256,448l-30.164-27.211C118.718,322.442,48,258.61,48,179.095C48,114.221,97.918,64,162.4,64   c36.399,0,70.717,16.742,93.6,43.947C278.882,80.742,313.199,64,349.6,64C414.082,64,464,114.221,464,179.095   c0,79.516-70.719,143.348-177.836,241.694L256,448z" />
          </g>
        </svg>
        <div className="badge-icon font-sm border-round center-item">
          <div>{totalItemsInWishList()}</div>
        </div>
      </div>
    </div>
  );
};