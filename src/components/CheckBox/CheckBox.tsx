import classNames from 'classnames';
import './CheckBox.scss';

/** Пропсы, которые принимает компонент CheckBox */
export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
  checked?: boolean;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  checked,
  ...rest
}) => {
  let cn = classNames(
    'checkbox',
    { input_disabled: rest.disabled },
    rest.className
  );
  return (
    <input
      {...rest}
      type="checkbox"
      className={cn}
      checked={checked}
      name="chekkk"
      id="chekkk"
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};

export default CheckBox;
