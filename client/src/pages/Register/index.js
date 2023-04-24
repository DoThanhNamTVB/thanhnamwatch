import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Register.scss';
import routesConfig from '~/config/routes';

function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5 mx-3">
            <div className="register w-100 border border-2 rounded-5">
                <div className="header-register text-center ">
                    <h2 className="fw-bolder">ĐĂNG KÍ</h2>
                </div>
                <form className="form-register row">
                    <div className="mb-3 form-register-item col-md-6 col-12">
                        <label htmlFor="userName" className="form-label">
                            Tên người dùng
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            aria-describedby="emailHelp"
                            placeholder="Nguyen Van A"
                        />
                    </div>
                    <div className="mb-3 form-register-item col-md-6 col-12">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="mb-3 form-register-item col-md-6">
                        <label htmlFor="phonenumber" className="form-label">
                            SĐT
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="phonenumber"
                            aria-describedby="emailHelp"
                            placeholder="0123xxxxxx"
                        />
                    </div>
                    <div className="mb-3 form-register-item col-md-6">
                        <label htmlFor="gender" className="form-label">
                            Giới tính
                        </label>
                        <select className="form-select" id="gender" aria-label=" select example">
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                        </select>
                    </div>
                    <div class="mb-3 col-12 col-md-12">
                        <label htmlFor="formFile" className="form-label">
                            Ảnh đại diện
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 col-md-12">
                        <label htmlFor="address-detail" className="form-label">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address-detail"
                            placeholder="Số nhà x, ngõ a/b, đường Cầu Diễn, quận Nam Từ Liêm, Hà Nội"
                        />
                    </div>
                    <div className="mb-3 form-register-item form-item-password">
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Nhập mật khẩu ...."
                        />
                        <span>
                            <AiFillEye />
                        </span>
                        <span>
                            <AiFillEyeInvisible />
                        </span>
                    </div>
                    <div className="mb-3 form-register-item form-item-password">
                        <label htmlFor="repassword" className="form-label">
                            Nhập lại mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="repassword"
                            placeholder="Nhập lại mật khẩu ...."
                        />
                        <span>
                            <AiFillEye />
                        </span>
                        <span>
                            <AiFillEyeInvisible />
                        </span>
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">
                        <strong>Đăng Kí</strong>
                    </button>
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span>Bạn đã có tài khoản?</span>
                            </div>
                            <div>
                                <Link to={routesConfig.login}>Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
