import { Link } from 'react-router-dom';

import MediaItem from './components/MediaItem';
import routesConfig from '~/config/routes';
import { deleteCart, getCartByUserId, getCurrentUser } from '~/store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import formatter from '~/components/FuntionComponent/formatPrice';

import './Cart.scss';

function Cart() {
    //dispatch cart
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    // console.log(user);

    useEffect(() => {
        dispatch(getCartByUserId(user?.id));
    }, [dispatch, user]);

    const { carts, statusDelete } = useSelector((state) => state.managerCart);
    // console.log(carts);

    //set số lượng sản phẩm
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const count = carts?.reduce((accumulator, currentValue) => accumulator + currentValue?.quantity, 0);
        setQuantity(count);
    }, [carts]);

    //get user

    const products = user?.Products;
    // console.log(products);
    //handle delete item
    const handleDelete = (idUser, idProduct) => {
        dispatch(deleteCart(idUser, idProduct));
    };

    useEffect(() => {
        if (statusDelete === true) {
            dispatch(getCurrentUser());
            dispatch(getCartByUserId(user?.id));
        }
    }, [statusDelete, dispatch, user]);

    //get total money
    const [totalMoney, setTotalMoney] = useState();

    useEffect(() => {
        const total = products?.reduce((accumulator, currentValue) => {
            return (
                accumulator +
                (currentValue?.price - (currentValue?.price * currentValue?.discount) / 100) *
                    currentValue?.Cart?.quantity
            );
        }, 0);
        setTotalMoney(total);
    }, [products]);

    const totalMoneyFormat = formatter.format(totalMoney);

    return (
        <>
            <nav aria-label="breadcrumb">
                <div className=" px-5 py-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={routesConfig.home}>Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to={routesConfig.cartPage}>Giỏ hàng</Link>
                        </li>
                    </ol>
                </div>
            </nav>

            <div className="wrapper-mainCart">
                <div className="content-bodyCart">
                    <div className=" px-5 py-5">
                        <div className="row justify-content-between">
                            <div className="col-lg-8 col-sm-12 col-xs-12 contentCart-detail">
                                <div className="heading-cart">
                                    <h2>Giỏ hàng của bạn</h2>
                                    <hr className="fw-bold" />
                                </div>
                                <div className="form-cart">
                                    <p className="title-number-cart">
                                        Bạn đang có <strong>{quantity}</strong> sản phẩm trong giỏ hàng
                                    </p>
                                    <div className="table-cart">
                                        {products?.length > 0 &&
                                            products?.map((item, index) => {
                                                return (
                                                    <MediaItem
                                                        key={index}
                                                        img={
                                                            process.env.REACT_APP_SERVER_URL +
                                                            item?.Colors?.find(
                                                                (color) => color.id === item?.Cart?.colorId,
                                                            )?.Product_Color?.img
                                                        }
                                                        handleDelete={() => handleDelete(user.id, item.id)}
                                                        price={item?.price}
                                                        sale={item?.discount}
                                                        productName={item?.productName}
                                                        color={
                                                            item?.Colors.find(
                                                                (color) => color.id === item?.Cart?.colorId,
                                                            )?.colorName
                                                        }
                                                        countCurrent={item?.Cart?.quantity}
                                                        productId={item.id}
                                                        colorId={
                                                            item?.Colors?.find(
                                                                (color) => color.id === item?.Cart?.colorId,
                                                            )?.id
                                                        }
                                                        qtyDatabase={
                                                            item?.Colors?.find(
                                                                (color) => color.id === item?.Cart?.colorId,
                                                            )?.Product_Color?.quantity
                                                        }
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 sidebarCart-sticky">
                                <div className="mainCart-sidebar">
                                    <h2 className="summary-title">Thông tin đơn hàng</h2>
                                    <hr />

                                    <div className="summary-total">
                                        <p>
                                            Tổng tiền: <span>{totalMoneyFormat}</span>
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="summary-action">
                                        <p>- Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                        <p>- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                        <Link
                                            id="btnCart-checkout"
                                            className="checkout-btn"
                                            to={routesConfig.checkoutstep1Page}
                                        >
                                            <div className="summary-button">THANH TOÁN</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
