import { useState } from "react";
import "./productList.css";

const ProductList = () => {
  const [productList, setProductList] = useState([
    {
      productNo: 1,
      productName: "샤인머스캣",
      productPrice: "19,990",
      productImg: "/image/shop1.jpg",
      isLike: true,
      star: 4,
    },
    {
      productNo: 2,
      productName: "스테비아 토마토",
      productPrice: "11,400",
      productImg: "/image/shop2.jpg",
      isLike: true,
      star: 4,
    },
    {
      productNo: 3,
      productName: "로엘 히알루론산 콜라겐정",
      productPrice: "19,940",
      productImg: "/image/shop3.png",
      isLike: false,
      star: 4,
    },
    {
      productNo: 4,
      productName: "코멧 KF94 보건마스크",
      productPrice: "21,990",
      productImg: "/image/shop4.jpg",
      isLike: true,
      star: 5,
    },
    {
      productNo: 5,
      productName: "디저트 과일 티포크",
      productPrice: "10,400",
      productImg: "/image/shop5.jpg",
      isLike: false,
      star: 5,
    },
    {
      productNo: 6,
      productName: "스텐 케틀팟 인덕션주전자",
      productPrice: "18,900",
      productImg: "/image/shop6.jpg",
      isLike: false,
      star: 4,
    },
    // {
    //   productNo: 7,
    //   productName: "투명창 머핀 상자 컵케이크 타르트",
    //   productPrice: "18,000",
    //   productImg: "/image/shop7.jpg",
    //   isLike: true,
    //   star: 5,
    // },
    // {
    //   productNo: 8,
    //   productName: "소고기 800g 모둠 갈비살",
    //   productPrice: "32,500",
    //   productImg: "/image/shop8.jpg",
    //   isLike: true,
    //   star: 4,
    // },
  ]);
  const addProduct = (obj) => {
    productList.push(obj);
    setProductList([...productList]);
  };
  return (
    <div className="product-content">
      <div className="title">
        <span>상품목록</span>
      </div>
      <div className="product-list">
        {productList.map((product, index) => {
          return (
            <Product
              product={product}
              key={"product" + index}
              productList={productList}
              setProductList={setProductList}
              index={index}
            />
          );
        })}
      </div>
      {/* <RegistProduct
        productList={productList}
        setProductList={setProductList}
      /> */}
      <RegistProduct addProduct={addProduct} />
    </div>
  );
};
const Product = (props) => {
  const product = props.product;

  const productList = props.productList;
  const setProductList = props.setProductList;
  const index = props.index;

  const like = () => {
    product.isLike = !product.isLike;
    productList[index] = product;
    setProductList([...productList]);
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.productImg} />
      </div>
      <div className="product-info">
        <div className="product-title">{product.productName}</div>
        <div className="product-price">
          <span className="price">{product.productPrice}</span>
          <span>원</span>
        </div>
        <div className="star-rate">
          <StarRate star={product.star} />
        </div>
        <div className="like">
          {product.isLike ? (
            <span class="material-icons" onClick={like}>
              favorite
            </span>
          ) : (
            <span class="material-icons" onClick={like}>
              favorite_border
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const StarRate = (props) => {
  const star = props.star;
  const arr = new Array();
  for (let i = 0; i < star; i++) {
    arr.push(
      <span key={"star" + i} className="material-icons star-on">
        grade
      </span>
    );
  }
  return <>{arr}</>;
};

const RegistProduct = (props) => {
  // 상품번호, 이름, 가격, 별점, 이미지경로 입력받아서 추가(좋아요는 기본적으로 안눌리는 형태로)
  const [productNo, setProductNo] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [star, setStar] = useState("");
  const [productImg, setProductImg] = useState("");
  const addProduct = props.addProduct;
  // const productList = props.productList;
  // const setProductList = props.setProductList;
  /*
  const changeProductNo = (e) => {
    setProductNo(e.target.value);
  };
  const changeProductName = (e) => {
    setProductName(e.target.value);
  };
  const changeProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
  const changeStar = (e) => {
    setStar(e.target.value);
  };
  const changeProductImg = (e) => {
    setProductImg(e.target.value);
  };
  */
  const regist = () => {
    const newProduct = {
      productNo: productNo,
      productName: productName,
      productImg: productImg,
      productPrice: productPrice,
      star: star,
      isLike: false,
    };
    //productList.push(newProduct);
    //setProductList([...productList]);
    addProduct(newProduct);
    setProductNo("");
    setProductName("");
    setProductPrice("");
    setProductImg("");
    setStar("");
  };
  return (
    <div className="regist-wrap">
      <InputDiv
        name="상품번호"
        id="productNo"
        data={productNo}
        setData={setProductNo}
      />
      <InputDiv
        name="상품이름"
        id="productId"
        data={productName}
        setData={setProductName}
      />
      <InputDiv
        name="상품가격"
        id="productPrice"
        data={productPrice}
        setData={setProductPrice}
      />
      <InputDiv name="별점" id="star" data={star} setData={setStar} />
      <InputDiv
        name="이미지 경로"
        id="productImg"
        data={productImg}
        setData={setProductImg}
      />
      <button onClick={regist}>상품 등록</button>
    </div>
  );
};
const InputDiv = (props) => {
  const name = props.name;
  const id = props.id;
  const data = props.data;
  const setData = props.setData;
  const changeValue = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} value={data} onChange={changeValue} />
    </div>
  );
};

export default ProductList;
